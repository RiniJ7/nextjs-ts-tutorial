//this segment will match any url that contain docs in the path

export default function Docs({
    params,
}: {
    params: {
        // here slug is defined as an object of strings
        slug: string[];
    };
}) {

    // it means url contain 2 segment after 'docs'. here it is assumed that the first segment is a feature and the second segment is a concept
    if(params.slug.length === 2) {
        return <h1>
            Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
        </h1>
    }
    // it means url contain 1 segment after 'docs'. here this segment features both features and concepts
    else if(params.slug.length === 1) {
        return <h1>
            Viewing docs for feature {params.slug[0]} and concept {params.slug[0]}
        </h1>
    }
    //if none of the above condition matches, it defaults to the documents home page

    return <h1> Docs home page ! </h1>;
}