var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '61999999999',
            adress: {
                postalcode: '72460200',
                street: 'Quadra 20',
                number: '02',
                details: 'Casa 02',
                district: 'Setor Leste (Gama)',
                city_state: 'Brasília/DF'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg.jpg'
        }

        return data
    }
}