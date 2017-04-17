export class Image  {
    title: string;
    link: string
    media: any;
    date_taken: string;
    description: string;
    published: string;
    author: string;
    author_id: string;
    tags: string;

    //TODO currently the thumbnail is retrieved via media.m value
    //possiblely we can load the image asynchronously and limit the size of the image
    public getThumbnail(): string {
        return null;
    }
}