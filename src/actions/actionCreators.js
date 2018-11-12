import { fetchChecklist } from '../api/index';
import { fetchCompanies } from '../api/index';

// actions object
const ACTIONS = {
	// handle change for the date picker component
	HANDLE_CHANGE_DATE_PICKER: 'HANDLE_CHANGE_DATE_PICKER',
	HANDLE_GET_CHECKLIST: 'HANDLE_GET_CHECKLIST',
	HANDLE_GET_COMPANIES: 'HANDLE_GET_COMPANIES'
};

//  exporting our action
export const handleChangeDatePicker = (date) => ({
	type: ACTIONS.HANDLE_CHANGE_DATE_PICKER,
	// date is the moment() object
	payload: date
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