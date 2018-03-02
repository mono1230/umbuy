package project.team6.umbuy.IntegrationTest;

import android.content.Context;
import android.content.Intent;
import android.support.test.InstrumentationRegistry;
import android.support.test.rule.ActivityTestRule;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;

import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.mockito.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import project.team6.umbuy.IntegrationTest.TestData;
import project.team6.umbuy.R;
import project.team6.umbuy.controller.AdvertisementService;
import project.team6.umbuy.model.Advertisement;
import project.team6.umbuy.view.AdsAdapter;
import project.team6.umbuy.view.ViewAdsActivity;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

import static android.support.test.internal.runner.junit4.statement.UiThreadStatement.runOnUiThread;
import static org.hamcrest.Matchers.instanceOf;
import static org.junit.Assert.*;

/**
 * Created by Kyle on 2/28/2018.
 */
public class ViewAds_IntegrationTest {
    private RecyclerView mRecyclerView;
    private List<Advertisement> ads;
    private TestData testData;

    @Mock
    private AdvertisementService adService;
    private Context context;
    private RecyclerView testRecyclerView;


    @Rule
    public ActivityTestRule<ViewAdsActivity> rule = new ActivityTestRule<ViewAdsActivity>(ViewAdsActivity.class) {
        @Override
        protected Intent getActivityIntent() {
            InstrumentationRegistry.getTargetContext();
            Intent intent = new Intent(Intent.ACTION_MAIN);
            return intent;
        }
    };

    @Before
    public void setUp() throws Exception {
        this.testData = new TestData();
        this.ads = this.testData.getAdsList();
    }

    // Test the initial setup for ViewAds
    @Test
    public void testViewAdsPresent() throws Exception {
        System.out.println("\nIntegration Tedst: testViewAdsPresent() started");
        ViewAdsActivity activity = rule.getActivity();
        // check RecyclerView are initiated
        mRecyclerView = activity.findViewById(R.id.listViewAds);
        assertNotNull(mRecyclerView);

        // Check searchText and searchButtons are initiated
        EditText searchText = activity.findViewById(R.id.search_bar);
        Button searchButton = activity.findViewById(R.id.search_button);
        assertNotNull(searchText);
        assertNotNull(searchButton);

        // make a mock adapter and assert that it successfully contains the ads.
        AdsAdapter adsAdapter = new AdsAdapter(this.ads, this.context);
        assertEquals(adsAdapter.getItemCount(), 2);
        System.out.println("\nIntegration Test: testViewAdsPresent() successfully finished");
    }

    // Test loading in ads
    @Test
    public void testUpdatedDataInRecyclerView() throws Exception {
        System.out.println("\nIntegration Tedst: testUpdatedDataInRecyclerView() started");
        ViewAdsActivity activity = rule.getActivity();
        this.testRecyclerView = activity.findViewById(R.id.listViewAds);
        AdsAdapter adsAdapter = new AdsAdapter(this.ads, this.context);
        this.testRecyclerView.setAdapter(adsAdapter);


        adService = new AdvertisementService();
        Call<List<Advertisement>> call = adService.getAllAdvertisements();
        call.enqueue(new Callback<List<Advertisement>>() {
            @Override // In this case, the recyclerView took a new ad and made the changes
            public void onResponse(Call<List<Advertisement>> call, Response<List<Advertisement>> response) {
                ads.add( new Advertisement(3, "KyleAhnbest", "LG", "A great LG for a great price", 55.99,
                        new Date(), new Date(), new Date(), "www.alink.com", "Electronics"));
                testRecyclerView.getAdapter().notifyDataSetChanged();
            }

            @Override
            public void onFailure(Call<List<Advertisement>> call, Throwable t) {
                Log.d("=================error", "Retrofit connection failed ================");
                assertEquals(1, 2); // In this case, we fail the test by force.
            }
        });
        System.out.println("\nIntegration Tedst: testUpdatedDataInRecyclerView() finished");
    }
}