import {
    Validator
} from 'vee-validate';

const validProduct = {
    custom: {
        code_id: {
            required: '(ກະລຸນາປ້ອນກ່ອນ...)',
            max: '(ບໍ່ຄວນເກີນ 20 ໂຕເລກ...)',
            min: '(ບໍ່ຄວນສັ້ນກວ່າ 2 ໂຕເລກ...)',
        },
        barcode: {
            required: '(ກະລຸນາປ້ອນກ່ອນ...)',
            min: '(ບໍ່ຄວນສັ້ນກວ່າ 2...)',
        },
        name: {
            required: '(ກະລຸນາປ້ອນກ່ອນ...)',
        },
        amount: {
            required: '(ກະລຸນາປ້ອນກ່ອນ...)',
            numeric: '(ຄວນເປັນໂຕເລກ...)'
        },
    }
};

export const ProductValidation = (Vue) => {
    Validator.localize('en', validProduct);
    Vue.$validator.localize('en', validProduct);
}