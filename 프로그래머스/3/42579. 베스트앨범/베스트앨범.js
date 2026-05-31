function solution(genres, plays) {
    const answer = []
    const genresPlayNumberMap = new Map()

    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i]
        genresPlayNumberMap.set(genre, (genresPlayNumberMap.get(genre) ?? 0) + plays[i])
    }

    const genresPlayNumberSort = [...genresPlayNumberMap.keys()].sort((a, b) => genresPlayNumberMap.get(b) - genresPlayNumberMap.get(a))

    for (const genreSort of genresPlayNumberSort) {
        const genreDetail = []

        for (let index = 0; index < genres.length; index++) {
            const genre = genres[index]
            if (genre === genreSort) {
                genreDetail.push({
                    index,
                    plays: plays[index]
                })
            }
        }

        genreDetail.sort((a, b) => {
            if (a.plays === b.plays) {
                return a.index - b.index
            }
            return b.plays - a.plays
        })

        for (let n = 0; n < 2; n++) {
            if (!genreDetail[n]) continue
            
            answer.push(genreDetail[n].index)
        }

    }

    return answer
}