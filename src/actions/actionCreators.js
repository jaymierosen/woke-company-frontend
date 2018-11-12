import { fetchChecklist } from '../api/index';
import { fetchCompanies } from '../api/index';

const ACTIONS = {
	HANDLE_CHANGE_DATE_PICKER: 'HANDLE_CHANGE_DATE_PICKER',
	HANDLE_GET_CHECKLIST: 'HANDLE_GET_CHECKLIST',
	HANDLE_GET_COMPANIES: 'HANDLE_GET_COMPANIES',
	HANDLE_GET_SINGLE_COMPANY: 'HANDLE_GET_SINGLE_COMPANY'
};

export const handleChangeDatePicker = (date) => ({
	type: ACTIONS.HANDLE_CHANGE_DATE_PICKER,
	payload: date
});

export const handleSingleCompany = (singleCompany) => ({
	type: ACTIONS.HANDLE_GET_SINGLE_COMPANY,
	payload: singleCompany
});

export const getChecklist = () => (dispatch) =>
	fetchChecklist().then((result) =>
		dispatch({
			type: ACTIONS.HANDLE_GET_CHECKLIST,
			payload: result
		})
	);

export const getCompanies = () => (dispatch) =>
	fetchCompanies().then((result) =>
		dispatch({
			type: ACTIONS.HANDLE_GET_COMPANIES,
			payload: result
		})
	);
