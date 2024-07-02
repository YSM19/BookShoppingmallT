package com.web.bookshoppingmallt.repository;

import com.web.bookshoppingmallt.entity.Article;
import org.springframework.stereotype.Repository;

@Repository
public interface ArticleRepository {
    Article findByTitle(String title);
}
