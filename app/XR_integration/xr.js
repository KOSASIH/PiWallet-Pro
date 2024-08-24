import { ReactNativeAR } from 'react-native-ar';

const xr = {
  createARExperience: () => {
    const arExperience = ReactNativeAR.createARExperience({
      type: 'marker',
      marker: 'wallet',
    });
    return arExperience;
  },
};

export default xr;
