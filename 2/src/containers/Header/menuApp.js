export const adminMenu = [
    { //hệ thống
        name: 'menu.BigCorp.header', menus: [
            { name: 'menu.BigCorp.BigCorp-administrator.productline-manage', link: '/BigCorp/productline-manage' },
            {
                name: 'menu.BigCorp.BigCorp-administrator.facility-manage', subMenus: [
                    { name: 'menu.BigCorp.BigCorp-administrator.manufactory-manage', link: '/BigCorp/manufactory-manage' },
                    { name: 'menu.BigCorp.BigCorp-administrator.distribution-manage', link: '/BigCorp/distribution-manage' },
                    { name: 'menu.BigCorp.BigCorp-administrator.warranty-manage', link: '/BigCorp/warranty-manage' }
                ]
            },
            {
                name: 'menu.BigCorp.BigCorp-administrator.report', link: '/BigCorp/report'
            },
            // { name: 'menu.BigCorp.BigCorp-parameter.header', link: '/BigCorp/BigCorp-parameter' },
        ]
    },
];


export const ManufactoryMenu = [
    { //hệ thống
        name: 'menu-manufactory.Manufactory.header', menus: [
            { name: 'menu-manufactory.Manufactory.Manufactory-administrator.stock-manage', link: '/Manufactory/stock-manage' },
            { name: 'menu-manufactory.Manufactory.Manufactory-administrator.distribution-move', link: '/Manufactory/distribution-move' },
            { name: 'menu-manufactory.Manufactory.Manufactory-administrator.warranty-recieve', link: '/Manufactory/warranty-recieve' },
            // { name: 'menu.BigCorp.BigCorp-parameter.header', link: '/BigCorp/BigCorp-parameter' },
        ]
    },
];

export const DistributionMenu = [
    { //hệ thống
        name: 'menu-distribution.Distribution.header', menus: [
            { name: 'menu-distribution.Distribution.Distribution-administrator.manufactory-exchange', link: '/Distribution/manufactory-exchange' },
            { name: 'menu-distribution.Distribution.Distribution-administrator.sell-manage', link: '/Distribution/sell-manage' },
            { name: 'menu-distribution.Distribution.Distribution-administrator.warranty-exchange', link: '/Distribution/warranty-exchange' },
            // { name: 'menu.BigCorp.BigCorp-parameter.header', link: '/BigCorp/BigCorp-parameter' },
        ]
    },
];

export const WarrantyMenu = [
    { //hệ thống
        name: 'menu-warranty.Warranty.header', menus: [
            { name: 'menu-warranty.Warranty.Warranty-administrator.product-back', link: '/Warranty/product-back' },
            { name: 'menu-warranty.Warranty.Warranty-administrator.product-error-back', link: '/Warranty/product-error-back' },
            { name: 'menu-warranty.Warranty.Warranty-administrator.product-receive', link: '/Warranty/product-receive' },
            // { name: 'menu.BigCorp.BigCorp-parameter.header', link: '/BigCorp/BigCorp-parameter' },
        ]
    },
];