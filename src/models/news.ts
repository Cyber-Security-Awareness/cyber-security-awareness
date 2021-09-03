export interface News {
    id: string;
    coverImage: string;
    title: string;
    summary: string;
    mdContent: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface NewsCreatingDto {
    title: string;
    coverImage: string;
    summary: string;
    mdContent: string;
}


export interface NewsUpdatingDto {
    title: string;
    coverImage: string;
    summary: string;
    mdContent: string;
}