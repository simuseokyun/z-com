import style from './home.module.css';
import Tab from '@/app/(afterlogin)/home/_component/Tab';
import PostForm from '@/app/(afterlogin)/home/_component/PostForm';
import Post from '@/app/(afterlogin)/_component/Post';
import TabProvider from './_component/TabProvider';
export default function Home() {
    return (
        <main className={style.main}>
            <TabProvider>
                <Tab />
                <PostForm />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </TabProvider>
        </main>
    );
}
