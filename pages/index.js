import Head from 'next/head';
import Link from 'next/link';
import { Layout } from '../components/layout/Layout';

export default function GithubUsers({ users }) {
    return (
        <Layout>
            <Head>
                <title>Github Users</title>
            </Head>
            <h1>GithubUsers</h1>
            <ul>
                {users.items.map((user) => (
                    <li key={user.id}>
                        <Link href={`users/${encodeURIComponent(user.login)}`}>{user.login}</Link>
                    </li>
                ))}
            </ul>
        </Layout>
    );
}

export async function getStaticProps() {
    const url = 'https://api.github.com/search/users';
    const q = 'created:>=2021-01-01 location:russia';
    // https://api.github.com/search/users?q=created:%3E2021-01-01%20location:russia
    // новые пользователи после 21 года из россии
    const api = `${url}?q=${encodeURIComponent(q)}`;
    const res = await fetch(api);
    const users = await res.json();
    return { props: { users } };
}
