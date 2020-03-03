import * as Connector from './connector'

export const getBusinessFlights = async () => {
    try {

        const response = await Connector.get(`https://tokigames-challenge.herokuapp.com/api/flights/cheap`);
        if (response.status === 200) {
            const { data } = response.data;
            if (data) {
                return data;
            } else {
                throw new Error(response);
            }
        } else {
            throw new Error(response);
        }

    } catch (ex) {
        throw new Error(ex);
    }
}