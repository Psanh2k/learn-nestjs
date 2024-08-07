export class Users {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
    google_id?: string;
    is_admin?: number;
    is_super?: number;
    remember_token?: string;

    constructor({ id, name, email, password, google_id, is_admin, is_super, remember_token }) {
        if (id != null) this.id = id;
        if (name != null) this.name = name;
        if (email != null) this.email = email;
        if (password != null) this.password = password;
        if (google_id != null) this.google_id = google_id;
        if (is_admin != null) this.is_admin = is_admin;
        if (is_super != null) this.is_super = is_super;
        if (remember_token != null) this.remember_token = remember_token;
    }
}