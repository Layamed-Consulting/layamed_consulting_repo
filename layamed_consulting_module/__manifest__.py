{
    'name': "LAYAMED Consulting",
    'description': "Layamed consulting",
    'summary': "",
    'author': 'ST',
    'category': 'base',
    'version': '1.0',
    'description': """
        This module introduces custom features for the Chic Corner system, including new models, views, and logic to improve functionality.
    """,
    'author': 'LAYAMEDCONSULTING',
    'website': 'http://www.layamedconsulting.com',
    'category': '',
    'depends': ['base', 'sale','website' ],
    'data': [
        'report/devis.xml',
        'report/BC.xml',
        'views/invoice.xml',
        'views/hr_payslip_view.xml',
        'report/hr_payslip_report.xml',
        'views/website_homepage_inherit.xml',
    ],
    'assets': {
        'web.assets_frontend': [
            'layamed_consulting_module/static/src/js/references_slider.js',
            'layamed_consulting_module/static/src/css/reference_website.css',
        ],
    },
    #'assets': {
        #'web.report_assets_common': [
            #'chic_corner_module/static/src/css/bon_sortie_css.css',
            #'chic_corner_module/static/src/css/style.css',
        #],
        #'web.assets_backend': [
         #  'chic_corner_module/static/src/models/barcode_picking.js',
           #'chic_corner_module/static/src/js/prnt_direct.js',
        #],
        #'point_of_sale._assets_pos': [
         #  'chic_corner_module/static/src/app/**/*',
        #],
    #},
    'installable': True,
    'application': True,
    'auto_install': False,
}
