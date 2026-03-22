package com.hoen;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;
import java.util.stream.Collectors;

@Path("/search")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class SearchResource {

    private final List<SearchResult> searchResults;

    public SearchResource(List<SearchResult> searchResults) {
        this.searchResults = searchResults;
    }

    @POST
    public Response search(Search search) {
        if (search == null || search.getCity() == null) {
            return Response.status(Response.Status.BAD_REQUEST).entity("City is required").build();
        }

        List<SearchResult> filteredResults = searchResults.stream()
                .filter(result -> result.getCity() != null && result.getCity().equalsIgnoreCase(search.getCity()))
                .collect(Collectors.toList());

        return Response.ok(filteredResults).build();
    }
}
