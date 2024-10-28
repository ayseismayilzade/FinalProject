// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import supabase from "../../supabase";

// export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
//   let { data, error } = await supabase.from("products").select("*");
//   if (error) throw new Error(error.message);
//   return data;
// });

// const loadStateFromLocalStorage = () => {
//   try {
//     const serializedState = localStorage.getItem("products");
//     if (serializedState === null) {
//       return [];
//     }
//     return JSON.parse(serializedState);
//   } catch (e) {
//     console.warn("Could not load products from localStorage", e);
//     return [];
//   }
// };

// const productSlice = createSlice({
//   name: "products",
//   initialState: {
//     isLoading: false,
//     data: loadStateFromLocalStorage(),
//     error: false,
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchProducts.pending, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(fetchProducts.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.data = action.payload;

//       try {
//         const serializedState = JSON.stringify(action.payload);
//         localStorage.setItem("products", serializedState);
//       } catch (e) {
//         console.warn("Could not save products to localStorage", e);
//       }
//     });
//     builder.addCase(fetchProducts.rejected, (state, action) => {
//       state.error = true;
//       state.isLoading = false;
//     });
//   },
// });

// export default productSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../../supabase"; // Supabase ayarlarını içeren dosya

// Ürünleri almak için asenkron işlev
export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const { data, error } = await supabase.from("products").select("*");
  if (error) throw new Error(error.message);
  return data;
});

// Yeni ürün eklemek için asenkron işlev
export const createProduct = createAsyncThunk("createProduct", async (product) => {
  const { data, error } = await supabase.from("products").insert([product]);
  if (error) {
    console.error("Supabase Hatası:", error); // Hata loglama
    throw new Error(error.message);
  }
  return data[0]; // Ekleme işleminden sonra yeni ürünü döndür
});

// Var olan ürünü güncellemek için asenkron işlev
export const updateProduct = createAsyncThunk("updateProduct", async ({ id, ...product }) => {
  const { data, error } = await supabase.from("products").update(product).match({ id });
  if (error) {
    console.error("Supabase Hatası:", error); // Hata loglama
    throw new Error(error.message);
  }
  return data[0]; // Güncelleme işleminden sonra güncellenen ürünü döndür
});

// LocalStorage'dan ürünleri yükleme işlevi
const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("products");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("LocalStorage'dan ürünler yüklenemedi:", e);
    return [];
  }
};

const productSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    data: loadStateFromLocalStorage(),
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;

        try {
          const serializedState = JSON.stringify(action.payload);
          localStorage.setItem("products", serializedState);
        } catch (e) {
          console.warn("LocalStorage'a ürünler kaydedilemedi:", e);
        }
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.error = true;
        state.isLoading = false;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.data.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      });
  },
});

export default productSlice.reducer;


