export interface Reaobj {
  _declaration: Declaration;
  propertyList: PropertyList;
}

export interface Declaration {
  _attributes: DeclarationAttributes;
}

export interface DeclarationAttributes {
  version: string;
  encoding: string;
}

export interface PropertyList {
  _attributes: PropertyListAttributes;
  rental: Rental;
}

export interface PropertyListAttributes {
  date: Date;
  username: string;
  password: string;
}

export interface Rental {
  _attributes: RentalAttributes;
  agentID: AgentID;
  uniqueID: AgentID;
  listingAgent: ListingAgent[];
  dateAvailable: AgentID;
  rent: Rent;
  priceView: PriceView;
  bond: AgentID;
  address: Address;
  category: Category;
  headline: AgentID;
  description: AgentID;
  features: Features;
  landDetails: Details;
  newConstruction: AgentID;
  buildingDetails: Details;
  inspectionTimes: InspectionTimes;
  images: Images;
  objects: Objects;
  ecoFriendly: EcoFriendly;
  allowances: Allowances;
}

export interface RentalAttributes {
  modTime: Date;
  status: string;
}

export interface Address {
  _attributes: AddressAttributes;
  subNumber: AgentID;
  streetNumber: AgentID;
  street: AgentID;
  suburb: Suburb;
  state: AgentID;
  postcode: AgentID;
  country: AgentID;
}

export interface AddressAttributes {
  display: string;
  streetview: string;
}

export interface AgentID {
  _text: string;
}

export interface Suburb {
  _attributes: SuburbAttributes;
  _text: string;
}

export interface SuburbAttributes {
  display: string;
}

export interface Allowances {
  petFriendly: AgentID;
  furnished: AgentID;
  smokers: AgentID;
}

export interface Details {
  area: Area;
}

export interface Area {
  _attributes: AreaAttributes;
}

export interface AreaAttributes {
  unit: string;
}

export interface Category {
  _attributes: CategoryAttributes;
}

export interface CategoryAttributes {
  name: string;
}

export interface EcoFriendly {
  solarPanels: AgentID;
  solarHotWater: AgentID;
  waterTank: AgentID;
}

export interface Features {
  bedrooms: AgentID;
  bathrooms: AgentID;
  garages: PriceView;
  carports: PriceView;
  remoteGarage: AgentID;
  secureParking: AgentID;
  airConditioning: AgentID;
  alarmSystem: AgentID;
  vacuumSystem: AgentID;
  intercom: AgentID;
  poolInGround: AgentID;
  poolAboveGround: AgentID;
  tennisCourt: AgentID;
  balcony: AgentID;
  deck: AgentID;
  courtyard: AgentID;
  outdoorEnt: AgentID;
  shed: AgentID;
  fullyFenced: AgentID;
  openFirePlace: AgentID;
  openSpaces: AgentID;
  toilets: PriceView;
  livingAreas: PriceView;
  hotWaterService: AgentID;
  insideSpa: AgentID;
  outsideSpa: AgentID;
  broadband: AgentID;
  builtInRobes: AgentID;
  dishwasher: AgentID;
  ductedCooling: AgentID;
  ductedHeating: AgentID;
  floorboards: AgentID;
  gasHeating: AgentID;
  gym: AgentID;
  hydronicHeating: AgentID;
  payTV: AgentID;
  reverseCycleAirCon: AgentID;
  rumpusRoom: AgentID;
  splitSystemAirCon: AgentID;
  splitSystemHeating: AgentID;
  study: AgentID;
  workshop: AgentID;
}

export interface PriceView {}

export interface Images {
  img: Img[];
}

export interface Img {
  _attributes: ImgAttributes;
}

export interface ImgAttributes {
  id: string;
  modTime?: Date;
  url?: string;
  format?: string;
}

export interface InspectionTimes {
  inspection: AgentID;
}

export interface ListingAgent {
  name?: AgentID;
  telephone?: Telephone[];
  email?: AgentID;
  _attributes?: ListingAgentAttributes;
}

export interface ListingAgentAttributes {
  id: string;
}

export interface Telephone {
  _text: string;
  _attributes?: TelephoneAttributes;
}

export interface TelephoneAttributes {
  type: string;
}

export interface Objects {
  floorplan: Img[];
}

export interface Rent {
  _attributes: RentAttributes;
  _text: string;
}

export interface RentAttributes {
  period: string;
  display: string;
}
