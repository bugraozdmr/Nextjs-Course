import AuthForm from '@/components/auth-form';

export default async function Home({searchParams}) {
  // searchParams direkt gelen ozellik
  const formMode = searchParams.mode || 'login';
  return <AuthForm mode={formMode} />;
}
