// const url = "https://api.transport.nsw.gov.au/v1/tp/";
const url = "/v1/tp/";

const stop = `10101331`; // airport
const when = ``;

export const makeRequest = () => {
  const data = {
    outputFormat: "rapidJSON",
    coordOutputFormat: "EPSG:4326",
    mode: "direct",
    type_dm: "stop",
    name_dm: stop,
    depArrMacro: "dep",
    itdDate: "20191023",
    itdTime: "2200",
    TfNSWDM: "true"
  };

  const searchParams = new URLSearchParams(data);

  return fetch(url + "departure_mon" + '?' + searchParams.toString()).then(res => res.json());
};
