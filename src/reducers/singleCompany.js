// initialState object
const initialState = {
	singleCompany: []
};

const singleCompaniesReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'HANDLE_GET_SINGLE_COMPANY':
			return {
				...state,
				singleCompany: action.payload
			};
		default:
			return state;
	}
};

export default singleCompaniesReducer;