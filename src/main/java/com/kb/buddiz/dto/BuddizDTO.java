package com.kb.buddiz.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class BuddizDTO {

    private String reviewContent;
    private long rating;
    private long likeUno;
    private long likedUno;
    private long reviewerUno;
    private long uno;

    public Buddiz toBuddiz() {
        return Buddiz.builder().rating(rating).reviewContent(reviewContent).reviewerUno(reviewerUno).uno(uno).build();
    }
    public Buddiz toReview() {
        return Buddiz.builder().likeUno(likeUno).likedUno(likedUno).build();
    }

}