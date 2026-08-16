export interface IMovieImages {
    backdrops: Backdrop[];
    id:        number;
    logos:     Backdrop[];
    posters:   Backdrop[];
}

export interface Backdrop {
    aspect_ratio: number;
    height:       number;
    iso_3166_1:   null | string;
    iso_639_1:    null | string;
    file_path:    string;
    vote_average: number;
    vote_count:   number;
    width:        number;
}
