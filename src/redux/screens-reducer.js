import { API } from "../api/api.js";

const UPDATE_AIR_STATE = "UPDATE_AIR_STATE";
const CREATE_SCREEN = "CREATE_SCREEN";
const TOGGLE_SCREENS = "TOGGLE_SCREENS";
const REMOVE_SCREEN = "REMOVE_SCREEN";

const initialState = {
	screens: [
		{
			id: 0,
			value: "Главная",
			isExists: true,
			isActive: true,
			elements: [],
		},
		{
			id: 1,
			value: 1,
			isExists: false,
			isActive: false,
			elements: [],
		},
		{
			id: 2,
			value: 2,
			isExists: false,
			isActive: false,
			elements: [],
		},
		{
			id: 3,
			value: 3,
			isExists: false,
			isActive: false,
			elements: [],
		},
		{
			id: 4,
			value: 4,
			isExists: false,
			isActive: false,
			elements: [],
		},
	],
	activeScreenIndex: 0,
};

const ScreensReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_AIR_STATE: {
			const screens = state.screens.map((el, index) => {
				if (index == action.id && action.id == 0) {
					el.elements = action.data;
				} else {
					el.elements = el.elements.map((item) => {
						action.data.map((new_el) => {
							if (item.sensor_name === new_el.sensor_name) {
								item = new_el;
							}
						});

						return item;
					});
				}

				return el;
			});

			return {
				...state,
				screens: [...screens],
			};
		};

		case CREATE_SCREEN: {
			let screens = state.screens.map((el, index) => {
				if (el.isActive) {
					el.isActive = false;
				}

				if (index === action.id) {
					el.isExists = true;
					el.isActive = true;
				}

				return el;
			});

			return {
				...state,
				screens: [...screens],
				activeScreenIndex: action.id,
			};
		};

		case TOGGLE_SCREENS: {
			let screens = state.screens.map((el) => {
				if (el.isActive) {
					el.isActive = false;
				};

				if (el.id === action.id) {
					el.isActive = true;
				}

				return el;
			});

			return {
				...state,
				screens: [...screens],
				activeScreenIndex: action.id,
			};
		};

		case REMOVE_SCREEN: {
			const screens = state.screens.map((el) => {
				if (el.id === 0) {
					el.isActive = true;
				}

				if (el.id === state.activeScreenIndex) {
					el.isExists = false;
					el.isActive = false;
				}

				return el;
			});

			return {
				...state,
				screens: [...screens],
			};
		};

		default:
			return state;
	}
};

const updateAirState = (data, id) => ({ type: UPDATE_AIR_STATE, data, id });
const CreateScreen = (id) => ({ type: CREATE_SCREEN, id });
const ToggleScreens = (id) => ({ type: TOGGLE_SCREENS, id });
const RemoveScreen = () => ({ type: REMOVE_SCREEN });

export const updateAirStateThunk = (id) => (dispatch) => {
	API.getState(data => {
		dispatch(updateAirState(data, id));
	});
};

export const CreateScreenThunk = (id) => (dispatch) => {
	dispatch(CreateScreen(id));
};

export const ToggleScreensThunk = (id) => (dispatch) => {
	dispatch(ToggleScreens(id));
};

export const RemoveScreenThunk = () => (dispatch) => {
	dispatch(RemoveScreen());
};

export default ScreensReducer;