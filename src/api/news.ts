import { NewsUpdatingDto, NewsCreatingDto } from './../models/news';
import { title } from "process";
import { News } from "../models/\bnews";

var fakeNews: News[] = [
    {
        id: "0",
        coverImage: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5e180c9d735f8c0007998956%2F0x0.jpg",
        title: "News title",
        summary: "This is a short summary of the content",
        mdContent: "This is example content",
        createdAt: new Date(),
        updatedAt: new Date(),
    } as News,
    {
        id: "1",
        coverImage: "https://lanter.com.au/wp-content/uploads/2021/08/business-cyber-security.jpeg",
        title: "News title",
        summary: "This is a short summary of the content",
        mdContent: "This is example content",
        createdAt: new Date(),
        updatedAt: new Date(),
    } as News,
    {
        id: "2",
        coverImage: "https://i.insider.com/6047ca292db4af00117e45d9?width=700",
        title: "News title",
        summary: "This is a short summary of the content",
        mdContent: "This is example content",
        createdAt: new Date(),
        updatedAt: new Date(),
    } as News,
    {
        id: "3",
        coverImage: "https://www.kaspersky.com/content/en-global/images/repository/isc/2017-images/What-is-Cyber-Security.jpg",
        title: "News title",
        summary: "This is a short summary of the content",
        mdContent: "This is example content",
        createdAt: new Date(),
        updatedAt: new Date(),
    } as News
]


export const createNews = async (NewsCreating: NewsCreatingDto): Promise<News> => {
    const newNewsToAdd = {
        ...NewsCreating,
        createdAt: new Date(),
        updatedAt: new Date(),
        id: `${parseInt(fakeNews[-1].id) + 1}`
    } as News;

    fakeNews.push(newNewsToAdd)

    return newNewsToAdd
}

export const getNews = async (): Promise<News[]> => {
    return fakeNews;
}

export const getNewsWithId = async (id: string): Promise<News | undefined> => {
    return fakeNews.find(n => n.id === id);
}

export const updateNews = async (id: string, NewsUpdating: NewsUpdatingDto): Promise<News> => {
    // Find the News
    const idx = fakeNews.findIndex(p => p.id === id);

    fakeNews[idx].coverImage = NewsUpdating.coverImage
    fakeNews[idx].summary = NewsUpdating.summary
    fakeNews[idx].mdContent = NewsUpdating.mdContent
    fakeNews[idx].title = NewsUpdating.title

    return fakeNews[idx]
}

export const deleteNews = async (id: string): Promise<boolean> => {
    fakeNews = fakeNews.filter(p => p.id !== id);
    return true;
}

