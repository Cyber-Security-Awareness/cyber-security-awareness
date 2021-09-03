import { pipeline } from 'stream';
import { Post, PostCreatingDto, PostUpdatingDto } from './../models/post';

const fake_post_2_content = `<div class="note">

Some *emphasis* and <strong>strong</strong>!

<img src="https://www.popsci.com/uploads/2021/08/24/0x0-KJC_5055-1.jpg?width=1440" style="width:100%;">
<br></br>
<p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
        <blockquote>
          <p>Longer quote goes here, maybe with some <strong>emphasized text</strong> in the middle of it.</p>
        </blockquote>
        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
        <h1>Example table</h1>
        <p>And don't forget about tables in these posts:</p>

<table class="table" style="border: 1px solid black; text-align: center; width: 100%;">
<thead>
  <tr style="border: 1px solid black;">
    <th>Name</th>
    <th>Upvotes</th>
    <th>Downvotes</th>
  </tr>
</thead>
<tbody>
  <tr style="border: 1px solid black;">
    <td>Alice</td>
    <td>10</td>
    <td>11</td>ㄊ
  </tr>
  <tr style="border: 1px solid black;">
    <td>Bob</td>
    <td>4</td>
    <td>3</td>
  </tr>
  <tr style="border: 1px solid black;">
    <td>Charlie</td>
    <td>7</td>
    <td>9</td>
  </tr>
</tbody>
<tfoot>
  <tr style="border: 1px solid black;">
    <td>Totals</td>
    <td>21</td>
    <td>23</td>
  </tr>
</tfoot>
</table>

</div>`

const fake_post_3_content = `
<p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
<ul>
  <li>First list item</li>
  <li>Second list item with a longer description</li>
  <li>Third list item to close it out</li>
</ul>
<p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>

`

var fakePosts: Post[] = [
    {
        postId: "0",
        authorId: "0",
        authorName: "Jacob",
        createdAt: new Date(),
        updatedAt: new Date(),
        mdContent: `This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected. \n\nThis is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.
        `,
        title: "Sample blog post"
    } as Post,
    {
        postId: "1",
        authorId: "0",
        authorName: "Jacob",
        createdAt: new Date(),
        updatedAt: new Date(),
        mdContent: fake_post_2_content,
        title: "Another blog post"
    } as Post,

    {
        postId: "2",
        authorId: "1",
        authorName: "Chris",
        createdAt: new Date(),
        updatedAt: new Date(),
        mdContent: fake_post_3_content,
        title: "New feature"
    } as Post,
]

export const createPost = async (postCreating: PostCreatingDto): Promise<Post> => {
    const newPostToAdd = {
        ...postCreating,
        createdAt: new Date(),
        updatedAt: new Date(),
        postId: `${parseInt(fakePosts[-1].postId) + 1}`
    }

    fakePosts.push(newPostToAdd)

    return newPostToAdd
}

export const getPosts = async (): Promise<Post[]> => {
    return fakePosts;
}

export const getPostWithId = async (id: string): Promise<Post | undefined> => {
    return fakePosts.find(p => p.postId === id);
}

export const updatePost = async (id: string, postUpdating: PostUpdatingDto): Promise<Post> => {
    // Find the post
    const idx = fakePosts.findIndex(p => p.postId === id);

    fakePosts[idx].authorId = postUpdating.authorId
    fakePosts[idx].title = postUpdating.title
    fakePosts[idx].mdContent = postUpdating.mdContent

    return fakePosts[idx]
}

export const deletePost = async (id: string): Promise<boolean> => {
    fakePosts = fakePosts.filter(p => p.postId !== id);
    return true;
}

