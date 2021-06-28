import { createSlice } from '@reduxjs/toolkit'

const SubjectSlice = createSlice({
  name: 'articles',
  initialState: {
    subjects: [],
  },
  reducers: {
    storeAllSubjects(state, action) {
      state.subjects = action.payload
    },
  },
})

export default SubjectSlice
