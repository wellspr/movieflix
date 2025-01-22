"use client";

import { MovieDetailsType, MovieProductionCountriesType } from "@/types";
import { useTranslations } from "next-intl";

export const ProductionCountries = ({ movie }: { movie: MovieDetailsType }) => {

    const t = useTranslations("Movie");

    if (!movie.production_countries) return null;
    if (movie.production_countries.length === 0) return null;

    const movieProductionCountries = movie.production_countries as MovieProductionCountriesType;

    return (
        <div className="movie-production-countries">
            <h4>{t('country', { count: movie.production_countries.length })}</h4>
            <ul className="movie-production-countries__list">
                {
                    movieProductionCountries.map((country) => {
                        return (
                            <li className="movie-production-countries__list__item" key={country.name}>
                                {country.name}
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};