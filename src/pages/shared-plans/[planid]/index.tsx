import { PlanScreen } from '@components/screens/Plan/PlanScreen';
import { getAuthSession } from '@utils/getServerSession';
import type { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const ClassroomPage: NextPage = () => {
	const router = useRouter();
	const planId = router.query.planid as string;

	return (
		<>
			<Head>
				<title>Wishes</title>
				<meta
					name="description"
					content="all of the classrooms you've created as a teacher"
				/>
			</Head>

			{planId && <PlanScreen planId={planId} />}
		</>
	);
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const session = await getAuthSession(context);

	if (!session) {
		return {
			redirect: {
				destination: '/auth/signin',
				permanent: false,
			},
		};
	} else {
		return { props: {} };
	}
}

export default ClassroomPage;
