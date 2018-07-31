import gender from '../../globals/common-enums';

export default {
    seed() {
        return [{
            firstname: 'Shirley',
            lastname: 'Michaely',
            age: 22,
            email: 'shirley@gmail.com',
            password: '1234',
            gender: gender.FEMALE,
            height: 162,
            isadmin: true
        },
            {
                firstname: 'Yakir',
                lastname: 'Kadkoda',
                age: 26,
                email: 'yakir@gmail.com',
                password: '1234',
                gender: gender.MALE,
                height: 175,
                isadmin: true
            },
            {
                firstname: 'Liron',
                lastname: 'Broyer',
                age: 23,
                email: 'liron@gmail.com',
                password: '1234',
                gender: gender.FEMALE,
                height: 167,
                isadmin: true
            }];
    }
};