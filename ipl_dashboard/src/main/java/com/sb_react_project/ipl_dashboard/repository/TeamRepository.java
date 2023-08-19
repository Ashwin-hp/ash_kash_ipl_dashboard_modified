package com.sb_react_project.ipl_dashboard.repository;

import com.sb_react_project.ipl_dashboard.model.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface TeamRepository extends CrudRepository<Team, Long> {
    Team findByTeamName(String teamName);
}
