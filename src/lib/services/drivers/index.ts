import useAxios from "~/lib/hooks/useAxios";

export interface DriversProps {
  name: string;
  cpf: string;
  birthDate: string;
  phone: string;
  email: string;
  cnhNumber: string;
  cnhCategory: string;
  antt: string;
  anttValidity: string;
  vehicleType: string;
  vehicleBrand: string;
  vehicleYear: string;
  vehiclePlate: string;
  experience: number | null;
  workingAreas: string;
  availability: string;
  notes: string;
}

type FiltroType = () => Promise<Array<DriversProps>>;

export interface ServicoType {
  get: FiltroType;
}

const useDriverService = (): ServicoType => {
  const api = useAxios();

  const get: FiltroType = () =>
    api
      .get<Array<DriversProps>>("drivers")
      .then((response) => response.data)
      .catch((error) => ({ ...error?.response?.data, sucesso: false }));

  return {
    get,
  };
};

export default useDriverService;
