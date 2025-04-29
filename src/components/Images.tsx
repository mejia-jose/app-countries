export type Image =
{
    image: string;
    className?: string;
    imageClass: string;
    alt?: string
}

const ImagesComponent = ({image, className, alt,imageClass} : Image) =>
{
    return(
        <div className={className}>
            <img src={image} alt={alt} className={imageClass} />
        </div>
    )
}
export default ImagesComponent;