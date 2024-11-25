import {useQuery} from '@tanstack/react-query'

interface ProfileProps {
  userId: string
}

export default function Profile({userId}: ProfileProps) {
  const {data} = useQuery({
    queryKey: ['profile'],
    queryFn: () => fetch(`/api/profile/${userId}`).then((res) => res.json()),
  })
  return <div>{data}</div>
}
