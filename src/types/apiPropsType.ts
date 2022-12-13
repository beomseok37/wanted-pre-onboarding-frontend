interface HeaderType {
  'Content-Type'?: string;
  Authorization?: string;
}
interface ApiProps {
  path: string;
  headers?: HeaderType;
}

interface PostProps<D> extends ApiProps {
  data: D;
}

interface PutProps<D, P> extends ApiProps {
  data: D;
  params: P;
}

interface DeleteProps<P> extends ApiProps {
  params: P;
}

export type { ApiProps, PostProps, PutProps, DeleteProps };
