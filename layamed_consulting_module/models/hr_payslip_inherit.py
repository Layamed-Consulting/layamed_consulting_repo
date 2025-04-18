from odoo import models, fields, api

class HrPayslip(models.Model):
    _inherit = "hr.payslip"

    def action_custom_payslip(self):
        """Custom logic for generating the custom payslip"""
        return self.env.ref('layamed_consulting_module.report_custom_payslip').report_action(self)


class HrPayslipLine(models.Model):
    _inherit = 'hr.payslip.line'

    parameter_value = fields.Text(string="Taux", compute="_compute_parameter_value", store=True)

    @api.depends('slip_id.line_ids.total', 'category_id')
    def _compute_parameter_value(self):
        for line in self:
            if line.category_id.code == "UNTAXABLE_DED":  # Check if it's a deduction
                basic_salary = next(
                    (l.total for l in line.slip_id.line_ids if l.category_id.code == "BASIC"), 0.0
                )
                line.parameter_value = round((line.total / basic_salary) * 100, 2) if basic_salary else False
            else:
                line.parameter_value = False
