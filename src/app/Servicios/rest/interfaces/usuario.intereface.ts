
export interface UsuarioInterface {
    id?: number;
    name?: string;
    username?: string;
    email?: string;
    phone?: string;
    website?: string;
    address?: Direccion;
    company?: Compania;
}

export interface Direccion {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: Geolocalizacion;
}

export interface Geolocalizacion {
    lat?: string;
    lng?: string;

}

export interface Compania {
    name?: string;
    catchPhrase?: string;
    bs?: string;
}