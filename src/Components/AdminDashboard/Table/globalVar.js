import moment from "moment";

const columns = [
  { id: "name", label: "Name", minWidth: 150 },
  { id: "skills", label: "Technical Skills", minWidth: 170 },
  {
    id: "experience",
    label: "Experience",
    minWidth: 10,
    align: "right",
  },
  {
    id: "createdAt",
    label: "Applied Date",
    minWidth: 170,
    align: "center",
    format: (value) => moment(value).format("LL"),
  },
  {
    id: "actions",
    label: "Actions",
    minWidth: 300,
    align: "center",
  },
  {
    id:"status",
    label:"Status",
    minWidth:10,
    align:"center"
  }
];

export default columns;
