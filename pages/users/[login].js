import { Layout } from '../../components/layout/Layout';

export default function User({ user }) {
    return (
        <Layout>
            User
            <p>ID:{user.id}</p>
            <p>Login:{user.login}</p>
            <p>company:{user.company}</p>
        </Layout>
    );
}

export async function getStaticPaths() {
    // TODO: вынести запрос
    const url = 'https://api.github.com/search/users';
    const q = 'created:>=2021-01-01 location:russia';
    // https://api.github.com/search/users?q=created:%3E2021-01-01%20location:russia
    // новые пользователи после 21 года из россии
    const api = `${url}?q=${encodeURIComponent(q)}`;
    const res = await fetch(api);
    const users = await res.json();

    const paths = users.items.map(({ login }) => ({ params: { login: `${login}` } }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    // const url = 'https://api.github.com/users/{username}';
    const url = 'https://api.github.com/users';
    const api = `${url}/${params.login}`;

    const res = await fetch(api);
    const user = await res.json();

    return { props: { user } };
}
