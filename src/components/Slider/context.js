import { createContext, useContext } from 'react';

const sliderContext = createContext();

export function useSliderContext() {
	const context = useContext(sliderContext);
	if (!context) {
		throw new Error(
			'Slider compound components cannot be rendered outside the Slider component',
		);
	}
	return context;
}

export default sliderContext;
