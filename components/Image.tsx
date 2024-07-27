import NextImage, { ImageProps } from 'next/image'

const basePath = process.env.BASE_PATH

export const getSrcUrl = (src: string) => {
  if (basePath) return `${basePath}${src}`
  return src
}

const Image = ({ src, ...rest }: ImageProps) => (
  <NextImage src={`${basePath || ''}${src}`} {...rest} />
)

export default Image
