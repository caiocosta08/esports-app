import axios from '../services/axios.service';

export const deposit = async (info) => {

    console.log(info);
    // return
    try {
        let results = await axios.post('/transaction/new', {
            metadata: { user_id: info?.id || 1 },
            amount: info?.amount,
            card_number: info?.cardNumber,
            card_holder_name: info?.name,
            card_expiration_date: info?.expirationDate,
            card_cvv: info?.cvv,
            payment_method: "credit_card",
            //address
            customer: {
                address: {
                    zipcode: "58253000",
                    neighborhood: "Centro",
                    street: "R PREFEITO FRANCISCO CARNEIRO",
                    street_number: "10"
                },
                phone_numbers: ["+5583986161672"],
                cpf: info?.cpf
            },
            //billing
            billing: {
                name: "Trinity Moss",
                address: {
                    country: "br",
                    state: "sp",
                    city: "Cotia",
                    neighborhood: "Rio Cotia",
                    street: "Rua Matrix",
                    street_number: "9999",
                    zipcode: "06714360"
                }
            }
        });
        // console.log({ results })
        console.log({ results: results?.data })
        if (results) return results.data;
    } catch (error) {
        return { error: error.response.data.error };
    }
}