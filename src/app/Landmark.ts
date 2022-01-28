export interface Landmark {
    objectId: String;
    photo_thumb: Photofile;
    url: String;
    short_info: String;
    photo: Photofile;
    location: Number[];
    title: String;
    description: String;
}

class Photofile {
    name: String;
    url: String;
    __type: String;
}