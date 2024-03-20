function solve(input) {
    const movies = []
    
    for (const row of input) {
        const addMovieCommand = 'addMovie';
        const directedByCommand = 'directedBy';
        const onDateCommand = 'onDate'

        if (row.includes(addMovieCommand)) {
            const movieName = row.substring(addMovieCommand.length + 1);
            const movie = {
                name: movieName,
            };

            movies.push(movie)

        } else if (row.includes(directedByCommand)) {
            const [movieName, director] = row.split(` ${directedByCommand} `);
            const movie = movies.find(movie => movie.name === movieName)
            
            if (movie) {
                movie.director = director
            }


        } else if (row.includes(onDateCommand)) {
        const [movieName, date] = row.split(` ${onDateCommand} `);
        const movie = movies.find(movie => movie.name === movieName)

        if (movie) {
            movie.date = date
        }
        }
    }

    movies
    .filter(movie => movie.director && movie.date)
    .forEach(movie => console.log(JSON.stringify(movie)));
}