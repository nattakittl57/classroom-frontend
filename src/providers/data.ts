import {BaseRecord, DataProvider, GetListParams, GetListResponse} from "@refinedev/core";


export  const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({ resource } : GetListParams): Promise<GetListResponse<TData>> => {
    // Implement your data fetching logic here

    if (resource !== "subjects") {
      return { data: [] as TData[], total: 0 };
    }

    return  {
      data: [],
        total: 0
    }
  },

  getOne: async () => {throw new Error("Method not implemented.")},
  create: async () => {throw new Error("Method not implemented.")},
  update: async () => {throw new Error("Method not implemented.")},
  deleteOne: async () => {throw new Error("Method not implemented.")},

  getApiUrl: () => ""
}