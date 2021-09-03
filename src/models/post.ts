export interface Post {
    postId: string;
    authorId: string;
    authorName: string;
    title: string;
    mdContent: string;
    updatedAt: Date;
    createdAt: Date;
}

export interface PostCreatingDto {
    authorId: string;
    authorName: string;
    title: string;
    mdContent: string;
}

export interface PostUpdatingDto {
    authorId: string;
    authorName: string;
    title: string;
    mdContent: string;
}