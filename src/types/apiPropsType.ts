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

interface PutProps<D> extends ApiProps {
  data: D;
}

export type { ApiProps, PostProps, PutProps };
