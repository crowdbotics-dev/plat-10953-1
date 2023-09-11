import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_t1_list = createAsyncThunk(
  "t1s/api_v1_t1_list",
  async payload => {
    const response = await apiService.api_v1_t1_list(payload)
    return response.data
  }
)
export const api_v1_t1_create = createAsyncThunk(
  "t1s/api_v1_t1_create",
  async payload => {
    const response = await apiService.api_v1_t1_create(payload)
    return response.data
  }
)
export const api_v1_t1_retrieve = createAsyncThunk(
  "t1s/api_v1_t1_retrieve",
  async payload => {
    const response = await apiService.api_v1_t1_retrieve(payload)
    return response.data
  }
)
export const api_v1_t1_update = createAsyncThunk(
  "t1s/api_v1_t1_update",
  async payload => {
    const response = await apiService.api_v1_t1_update(payload)
    return response.data
  }
)
export const api_v1_t1_partial_update = createAsyncThunk(
  "t1s/api_v1_t1_partial_update",
  async payload => {
    const response = await apiService.api_v1_t1_partial_update(payload)
    return response.data
  }
)
export const api_v1_t1_destroy = createAsyncThunk(
  "t1s/api_v1_t1_destroy",
  async payload => {
    const response = await apiService.api_v1_t1_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const t1sSlice = createSlice({
  name: "t1s",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_t1_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_t1_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_t1_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_t1_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_t1_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_t1_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_t1_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_t1_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_t1_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_t1_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_t1_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_t1_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_t1_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_t1_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_t1_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_t1_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_t1_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_t1_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_t1_list,
  api_v1_t1_create,
  api_v1_t1_retrieve,
  api_v1_t1_update,
  api_v1_t1_partial_update,
  api_v1_t1_destroy,
  slice: t1sSlice
}
