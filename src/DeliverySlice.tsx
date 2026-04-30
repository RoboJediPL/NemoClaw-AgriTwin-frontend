// DeliverySlice.tsx
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DeliveryState {
  deliveries: any[];
}

const initialState: DeliveryState = {
  deliveries: []
};

export const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    setDeliveries: (state, action: PayloadAction<any[]>) => {
      state.deliveries = action.payload;
    }
  }
});

export const { setDeliveries } = deliverySlice.actions;
export default deliverySlice.reducer;