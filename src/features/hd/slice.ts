import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type HdState = {
    selectedDocumentIds: string[];
};

const initialState: HdState = {
    selectedDocumentIds: [],
};

const hdSlice = createSlice({
    name: 'hd',
    initialState,
    reducers: {
        toggleDocumentSelection(state, action: PayloadAction<string>) {
            const documentId = action.payload;

            if (state.selectedDocumentIds.includes(documentId)) {
                state.selectedDocumentIds = state.selectedDocumentIds.filter(
                    (id) => id !== documentId,
                );
                return;
            }

            state.selectedDocumentIds.push(documentId);
        },

        clearDocumentSelection(state) {
            state.selectedDocumentIds = [];
        },
    },
});

export const {
    toggleDocumentSelection,
    clearDocumentSelection,
} = hdSlice.actions;

export default hdSlice.reducer;