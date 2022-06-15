import {
    Validator
} from 'vee-validate';

const index_validate = {
    custom: {
        name: {
            required: '(ກະລຸນາປ້ອນກ່ອນ...)',
            max: '(ບໍ່ຄວນສັ້ນກວ່າ 2 ໂຕອັກສອນ)'
        },
         description: {
             required: '(ກະລຸນາປ້ອນກ່ອນ...)',
             max: '(ບໍ່ຄວນສັ້ນກວ່າ 2 ໂຕອັກສອນ)'
        },
          language: {
              required: '(ກະລຸນາປ້ອນກ່ອນ...)',
              max: '(ບໍ່ຄວນສັ້ນກວ່າ 2 ໂຕອັກສອນ)'
        },
           type_rule: {
               required: '(ກະລຸນາປ້ອນກ່ອນ...)',
               max: '(ບໍ່ຄວນສັ້ນກວ່າ 2 ໂຕອັກສອນ)'
           },
         
    }
};

export const IndexValidation = (Vue) => {
    Validator.localize('en', index_validate);
    Vue.$validator.localize('en', index_validate);
}