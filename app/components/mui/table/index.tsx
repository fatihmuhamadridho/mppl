import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns = ({ data, isHomepage }: any) => {
  console.log("data", data);
  return [
    {
      field: `${isHomepage ? "_id" : "id_dataset"}`,
      headerName: "No",
      width: 70,
    },
    {
      field: "brand_name",
      headerName: "Nama Brand",
      width: 170,
      renderCell: (rowData: any) => <p>{isHomepage ? rowData.value : data?.brand_name}</p>,
    },
    {
      field: "type_car",
      headerName: "Tipe Mobil",
      width: 270,
      renderCell: (rowData: any) => <p>{isHomepage ? rowData.value : data?.type_car}</p>,
    },
    { field: "created_year", headerName: "Tahun Pembuatan", width: 170 },
    {
      field: "price",
      headerName: "Harga",
      width: 230,
      renderCell: (rowData: any) => (
        <p>
          {rowData.value.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </p>
      ),
    },
  ];
};

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataTable({ isHomepage, data, dataset }: any) {
  if (!isHomepage && dataset !== null && data !== null) {
    return (
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={dataset! || []}
          getRowId={(row) => row.id_dataset}
          columns={columns({ data: data })}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    );
  }

  if (isHomepage && dataset !== null && data !== null) {
    return (
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={dataset! || []}
          getRowId={(row) => row._id}
          columns={columns({ data: data, isHomepage: isHomepage })}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    );
  }

  return null;
}
